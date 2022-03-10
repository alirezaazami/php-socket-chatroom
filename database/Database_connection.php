<?php

//Database_connection.php

class Database_connection
{
    function connect()
    {
//        $connect = new PDO("mysql:host=localhost; dbname=chat.club.test", "root", "P@ssw0rd");

        $connect= new mysqli('localhost','root','P@ssw0rd','chat.club.test')or die("Could not connect to mysql".mysqli_error($con));

        return $connect;
    }
}

?>