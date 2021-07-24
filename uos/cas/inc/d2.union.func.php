<?php
	require_once 'config.inc.php';
	require_once 'db_mysql.class.php';
	require_once 'd2client.class.php';
/*
check account
return: -10001 over times
*/
 function checkLogin($userid,$username,$time,$flag,$server,$friendid){
 
 	//check time inner 5 minutes
 	if(!checkTime($time)){
 		return $GLOBALS['CODE_TIME_OVER'];
 	}
 	
 	//check sign
	//Md5(userid + username + time + server + web密匙
 	$mySign=md5($userid.$username.$time.$server.$friendid.$GLOBALS['D2_LOGIN_KEY']);

 	if($mySign!=$flag){
 		return $GLOBALS['SIGN_WRONG'];
 	}
 	 
 	 return $GLOBALS['VERIFY_SUCCESS'];
}
    
/*
get online users
*/    
function getPlayerCount($game,$server,$time,$sign){
	//check time inner 5 minutes
 	if(!checkTime($time)){
 		return $GLOBALS['CODE_TIME_OVER'];
 	}
 	
 	//check sign
 	$mySign=md5($game.$server.$time.$GLOBALS['D2_LOGIN_KEY']);
 	if($mySign!=$sign){
 		return $GLOBALS['SIGN_WRONG'];
 	}
 	global $dbhost, $dbuser, $dbpw, $dbname, $pconnect,  $dbcharset;
 	
	$db = new dbstuff;
	$db->connect($dbhost, $dbuser, $dbpw, $dbname, $pconnect, true, $dbcharset);
	unset($dbhost, $dbuser, $dbpw, $dbname, $pconnect);
	
	$onlineUsers=$db->result_first("select value from logdb.other where _key='playercount'");
	
 	$db->close(); 	
 	return $onlineUsers;
}

/*
check time over
*/
function checkTime($time){
	$timeSpan=time()-$time;
	//check time inner 5 minutes
	return abs($timeSpan)<5*60;
}
 
/* deposit
*/ 
function deposit($PayNum,$PayToUserId,$PayToUser,$PayMoney,$PayGold,$PayTime,$Server,$flag){
	//check verify  
	$mySign=md5($PayNum.'|' .$PayToUserId . '|' .$PayToUser .'|' .$PayMoney.'|' .$PayGold.'|' .$PayTime. '|' .$Server . '|' .$GLOBALS['D2_DEPOSIT_KEY']);
	if($mySign!=$flag){
		return -2;
	}
	
	//check money
	if($PayMoney>10000||$PayMoney<1){
		return -4;
	}
	
	//check coin
	if($PayGold>100000||$PayGold<1){
		return -5;
	}
	
	if($PayMoney!=$PayGold/10){
		return -3;
	}
	
	//check time
	global $dbuser, $dbpw, $dbname, $pconnect,  $dbcharset, $GAME_ID, $GAME_AREAID;
 	
	$db = new dbstuff;
	$db->connect($GLOBALS['dbhost_'.$Server], $dbuser, $dbpw, $dbname, $pconnect, true, $dbcharset);
	unset($dbhost, $dbuser, $dbpw, $dbname, $pconnect);		
	
	$ret=-100;
	$res=$db->query("set @retCode=$ret");
	$res=$db->query("call duowan_deposit('$PayNum','$PayToUser',$PayGold,$PayToUserId,$PayMoney,'$flag','$Server',$GAME_ID,$GAME_AREAID,@retCode)");
	$res=$db->query("select @retCode");
	$row=mysql_fetch_row($res);
	$ret = $row[0];
 	$db->close(); 
 	if($ret==0){   
		$d2=d2client::getInstance($Server);
		$d2->sendDeposit($name);
 		return 1;
 	}	
 	return $ret;	
}	

function sendGift($loginName,$ip,$code,$server){
        global  $dbuser, $dbpw, $dbname, $pconnect,  $dbcharset, $GAME_ID, $GAME_AREAID;

        $db = new dbstuff;
        $db->connect($GLOBALS['dbhost_'.$server], $dbuser, $dbpw, $dbname, $pconnect, true, $dbcharset);
        unset($dbhost, $dbuser, $dbpw, $dbname, $pconnect);

        $ret=-100;
        $res=$db->query("set @retCode=$ret");
        $res=$db->query("call csp_gamecode('$loginName','$ip','$code',@retCode)");
        $res=$db->query("select @retCode");
        $row=mysql_fetch_row($res);
        $ret = $row[0];
        $db->close();

        return $ret;
}

   function sendCmd($cmd,$server){
		$d2=d2client::getInstance($server);
		$d2->sendCmd($cmd);
	}
?>
