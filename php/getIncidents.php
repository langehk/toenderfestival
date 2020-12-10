<?php
$s = file_get_contents('./incidents.json');
header("Content-type: text/plain");
echo $s;