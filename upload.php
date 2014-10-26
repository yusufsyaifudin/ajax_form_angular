<?php

/**
 * This is just example for handling form data
 *
 */

header('Content-Type: application/json');
@$name = $_POST['name'];
@$avatar = $_FILES['avatar'];
@$comment = $_POST['comment'];

$response = array(
	'name' => $name,
	'avatar' => $avatar,
	'comment' => $comment
	);

echo json_encode($response);

?>