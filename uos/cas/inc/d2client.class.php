<?php
class d2client{
	static private $instance;
	private $socket;
	private function __construct($s){
		global $D2_PLATFORMIP,$D2_PLATFORMPORT;
		$this->socket=socket_create(AF_INET,SOCK_STREAM,SOL_TCP) or die('Unable to create socket\n');
		//$socket=socket_create(AF_INET,SOCK_DGRAM,SOL_UDP) or die('Unable to create socket\n');		
		socket_connect($this->socket,$GLOBALS['D2_PLATFORMIP_'.$s],$D2_PLATFORMPORT) or die('Unable to connect socket\n');
	
	}
	
	private function __clone(){}
	
	static public function getInstance($s){
		if(self::$instance ==null){
			self::$instance=new self($s);
		}
		return self::$instance;
	}
	
	public function sendDeposit($loginName){		
		$output='6|'.$loginName;
		socket_write($this->socket,$output,strlen($output));
	}
	
	public function sendCmd($cmd){				
		socket_write($this->socket,$cmd,strlen($cmd));
	}
	
	public function close(){	
		socket_close($this->socket);	
	}
	
}
?>