<?php
require_once './inc/config.inc.php';
require_once './inc/common.php';
$server=$_REQUEST['server'];

global $GAME_ID,$GAME_AREAID,$GAME_AREA_NAME,$GAME_ENTER_IP,$GAME_ENTER_PORT;
echo $_COOKIE['d2_cas'].','.$GAME_ID.','.$GAME_AREAID.','.$GLOBALS['GAME_ENTER_IP_'.$server].','.$GLOBALS['GAME_ENTER_PORT_'.$server].','.$GLOBALS['GAME_AREA_NAME_'.$server].','.urldecode($_COOKIE['d2_friend']);

?>