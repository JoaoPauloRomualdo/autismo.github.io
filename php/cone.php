<?php
    $servidor = "mysql:dbname=bd_autismo;host=localhost";
    $user     = "root";
    $senha    = "";

    try
    {
        $conn = new PDO($servidor,$user,$senha);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    }
    catch(PDOException $e)
    {
        echo 'Não foi possivel conectar :' . $e->getMessage();
    }


?>