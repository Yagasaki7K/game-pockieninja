<?php
/**-----------------------------------
Dreaming Cas Web
Copyright 2010-2012 Shanghai Dream Technology Company
-------------------------------------*/
//-------------db -----------
	//db host param is "dbhost_" append server id
	$dbhost_s1 = '10.11.6.48';
	$dbhost_s2 = '10.11.6.51';
	$dbhost_s3 = '10.11.6.54';
	$dbhost_s4 = '10.11.6.66';
	$dbhost_s5 = '10.11.6.68';
	$dbhost_s6 = '10.11.6.70';
	$dbhost_s7 = '10.11.6.72';
	//webgame db info
	$dbuser = 'game';		// db user name
	$dbpw = 'Ni#ol91!Ja';	// db password
	$dbname = 'webgamedb';	// db name
	$pconnect = 0;			// connection pool 0=close, 1=open
	$database = 'mysql';	// db type
	$dbcharset = '';		// MySQL charset, 'gbk', 'big5', 'utf8', 'latin1'
	$charset = 'utf-8';		// page charset,  'gbk', 'big5', 'utf-8'
//----------------------------------
		
//------secret key ----------------
	$D2_LOGIN_KEY='HereIsLoginKey';
	$D2_DEPOSIT_KEY='HereIsDepositKey';
	$VERIFY_SUCCESS=0;
	$CODE_TIME_OVER=-10001;
	$SIGN_WRONG=-10002;
	$GAME_ID=1;
	$GAME_AREAID=1;
//------game server list-----------
	$GAME_AREA_NAME_s1="area name";//area name
	$GAME_ENTER_IP_s1="dm enter ip";//dm enter ip
	$GAME_ENTER_PORT_s1=7001;//dm enter prot
	
	$GAME_AREA_NAME_s2="area name";//area name
	$GAME_ENTER_IP_s2="dm enter ip";//dm enter ip
	$GAME_ENTER_PORT_s2=7001;//dm enter prot
	
	$GAME_AREA_NAME_s3="area name";//area name
	$GAME_ENTER_IP_s3="dm enter ip";//dm enter ip
	$GAME_ENTER_PORT_s3=7001;//dm enter prot
	
//------uos info----------------------
	$D2_PLATFORMIP_s1='10.11.6.46'; //uos platform ip
	$D2_PLATFORMIP_s2='10.11.6.49'; 
	$D2_PLATFORMIP_s3='10.11.6.52';
	$D2_PLATFORMPORT=9989;//uos port 
	$D2_PLATFORM_KEY='howin.cn@gmail.com';//uos authentication key
?>