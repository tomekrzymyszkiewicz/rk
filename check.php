
<?php
$correctPassword = "AKBŁKG";
if (isset($_POST['password'])) {
    $uppercasePassword = mb_strtoupper($_POST['password'],"UTF-8");
    if ($uppercasePassword == $correctPassword) {
        echo '
        <b>Hasło prawidłowe!</b><br/>
        KLIKNIJ W LINKI, ABY POBRAĆ PLIKI <br/>
        <a href="files/1.docx"
          download="files/1.docx"> 
          Dokument nr 1
       </a><br/>
       <a href="files/2.docx"
          download="files/2.docx"> 
          Dokument nr 2
       </a><br/>
       <a href="files/3.docx"
          download="files/3.docx"> 
          Dokument nr 3
       </a><br/>
       <a href="files/4.docx"
          download="files/4.docx"> 
          Dokument nr 4
       </a><br/>
       <a href="files/5.docx"
          download="files/5.docx"> 
          Dokument nr 5
       </a>';
    }else {
        echo 'Hasło nieprawidłowe! <br/> <a href="index.html">Kilknij tutaj, aby spróbować ponownie.</a>';
    }
}
?>
