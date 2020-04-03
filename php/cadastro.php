<?php

include "cone.php";

    $comandoSQL = $conn->prepare("INSERT INTO 
    tb_cadastro(
        nome_cad,
        sobreNome_cad,
        email_cad,
        senha_cad,
        cidade_cad,
        estado_cad,
        cep_cad,
        casos_cad
    )
    VALUES(
        :nome,
        :sobreNome,
        :email,
        :senha,
        :cidade,
        :estado,
        :cep,
        :caso
    )
");
    $name      = $_POST['nome'];
    $sobreNome = $_POST['sobreNome'];
    $email     = $_POST['email'];
    $senha     = $_POST['senha'];
    $cidade    = $_POST['city'];
    $uf        = $_POST['estado'];
    $cep       = $_POST['cep'];
    $caso      = $_POST['caso'];

    $comandoSQL->bindParam (":nome",$name);
    $comandoSQL->bindParam (":sobreNome",$sobreNome);
    $comandoSQL->bindParam (":email",$email);
    $comandoSQL->bindParam (":senha",$senha);
    $comandoSQL->bindParam (":cidade",$cidade);
    $comandoSQL->bindParam (":estado",$uf);
    $comandoSQL->bindParam (":cep",$cep);
    $comandoSQL->bindParam (":caso",$caso);

    $comandoSQL->execute();

    echo"cadastro realizado com sucesso"
?>