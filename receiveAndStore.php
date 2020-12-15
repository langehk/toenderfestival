<?php
file_put_contents('./data/incidents.json', $_POST['json']);
header('Location: ' . $_SERVER['HTTP_REFERER']);
