<?php
require_once './inc/d2.union.func.php';
require_once './inc/CookieCrypt.php';
require_once './inc/config.inc.php';	
$userid=$_REQUEST['userid'];
$username=$_REQUEST['username'];
$time=$_REQUEST['time'];
$flag=$_REQUEST['flag'];
$server=$_REQUEST['server'];
$friendid=$_REQUEST['friendid'];
$cflag=1;
$ret=checkLogin($userid,$username,$time,$flag,$server,$friendid);
if($ret==0){
	if(empty($userid)){
		echo "no account";
		exit;
	}
	$crypt = new CookieCrypt($GLOBALS['D2_PLATFORM_KEY']);	
	setcookie("d2_cas",$crypt->encrypt($userid.'@'.$cflag.'@1'),$n,'/','.yourdomain.com');
	setcookie("d2_friend",urlencode($friendid),$n,'/','.yourdomain.com');	
	header("Location: http://$server.xxrz.yourdomain.com");
	die();
}
else{
	echo $ret;
}
?>

