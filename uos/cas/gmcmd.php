<?php
require_once './inc/d2.union.func.php';
$server=$_REQUEST['server'];
$cmd=str_replace("\\","",urldecode($_REQUEST['cmd']));
$cmd=str_replace('@','%',$cmd);
$ret=sendCmd($cmd,$server);
echo '0';
//王
?>