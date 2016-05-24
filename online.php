<?php
// your servers ip
$ip= 'm.ly';
// your servers port
$port = '25565';
 
 
function mc_status($host,$port) {
    $fp = fsockopen($host,$port,$errno,$errstr,$timeout=10);
        fputs($fp, "\xFE\x01");
        $response = '';
        $response .= fgets($fp);
        fclose($fp);
  $response = explode("\x00\x00", $response);
return $response;
}
 
$data = mc_status($ip,$port);
 
echo $data[4].'/'.$data[5];
 
?>