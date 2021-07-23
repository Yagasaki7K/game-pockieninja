<?php
	//PHP版的Bug上传保存工具
	$data = $GLOBALS['HTTP_RAW_POST_DATA'];
	$DirName = date("Y-m-d");
	$BufFileName = date("Y-m-d-H-i-s") . "-" . rand(0, 9999999999);
	if(is_null($data))
	{
		echo "No BugContent";
	}
	else
	{
		if(!file_exists($DirName))
		{
			mkdir($DirName);
		}
		$file = fopen($DirName."\\".$BufFileName.".bug","w") or die("Can't Open File");
		if(!fwrite($file, $data))
		{
			echo "Sucess!";
			fclose($file);
		}
	}
?>
