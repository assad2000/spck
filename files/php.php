<?php
$dir = 'files/';
$files = array_diff(scandir($dir), array('..', '.')); // احصل على جميع الملفات داخل المجلد "files"
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Shared Files</title>
</head>
<body>
    <h1>Shared Files</h1>
    <ul>
    <?php foreach($files as $file): ?>
        <li><a href="<?php echo $dir . $file; ?>"><?php echo $file; ?></a></li> <!--// قم بإنشاء روابط لكل ملف داخل المجلد "files"-->
    <?php endforeach; ?>
    </ul>
</body>
</html>