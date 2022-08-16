<?php
 // Conectando ao banco de dados:
    include_once("conectar.php");
 // Recebendo os dados a pesquisar
    $pesquisa = $_POST['cnpj'];
    $pesquisa2 = $_POST['linha'];
?>

<html>
    <head>
        <link href="estilos.css" rel="stylesheet" type="text/css">
        <title>Resultado da pesquisa</title>
        <link rel="shortcut icon" href="imagem/matheusfarias_logo.png" type="image/x-icon">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
    <!-- Criando tabela e cabeçalho de dados: -->
        <a class="btn btn-secondary m-3" href="index.html">Voltar</a>
        <table style="margin: auto;" class="table table-striped table-hover">
            <tr>
            <th>CNPJ</th>
            <th>RAZAO SOCIAL</th>
            <th>EXECUTIVO</th>
            <th>LINHA</th>
            <th>PLANO</th>
            <th>MÊS</th>
        </tr>
    
    <!-- Preenchendo a tabela com os dados do banco: -->
    <?php
    $sql = "SELECT * FROM clientes WHERE cnpj = '$pesquisa' OR linha = '$pesquisa2'";
    $resultado = mysqli_query($strcon,$sql) or die("Erro ao retornar dados");
    
    // Obtendo os dados por meio de um loop while
    while ($registro = mysqli_fetch_array($resultado))
    {
    $cnpj = $registro['cnpj'];
    $razao = $registro['razao'];
    $exec = $registro['exec'];
    $linha = $registro['linha'];
    $plano = $registro['plano'];
    $m = $registro['m'];
    echo "<tr>";
    echo "<td>".$cnpj."</td>";
    echo "<td>".$razao."</td>";
    echo "<td>".$exec."</td>";
    echo "<td>".$linha."</td>";
    echo "<td>".$plano."</td>";
    echo "<td>".$m."</td>";
    echo "</tr>";
    }
    mysqli_close($strcon);
    echo "</table>";
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
</html>