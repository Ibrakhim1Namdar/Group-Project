<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'ibra');
define('DB_PASSWORD', 'qwerty');
define('DB_NAME', 'finalproject');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

if(isset($_POST['u'])){
    $uname = $_POST['u'];
    $pass = $_POST['p'];
    $area = $_POST['d']; 

    $sql = "select * from flats where price = '".$uname."' AND area = '".$pass."'AND room = '".$area."' limit 1";

    $result = mysqli_query($link, $sql);

    // if(mysqli_num_rows($result) == 1){
        //  echo $result;
        // exit();

        while ($row = $result->fetch_assoc()) {
            echo 'Номер квартиры: '.$row['number'].'<br>Этаж: '.$row['floor'].'<br>Количество комнат: '.$row['room'].'<br>Общяя площадь: '.$row['area'].'<br>Название ЖК: '.$row['JKNAME'].'<br>Цена: '.$row['price']. ' тг.';
        
        }
    
    // else{
    //     echo "Wrong data!";
    // }
}
?>