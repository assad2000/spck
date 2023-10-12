$dir = 'files/';
$files = array_diff(scandir($dir), array('..', '.')); // احصل على جميع الملفات داخل المجلد "files"
echo json_encode($files); // قم بتحويل المصفوفة إلى JSON وإرجاعها