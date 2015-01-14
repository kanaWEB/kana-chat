function chat_send(){
	console.log("Sending message");
	user = $("#chat_user").val()
	message = $("[name=chat_message]").val();
	current_user = $("#chat_currentuser").val();
	console.log(user);
	console.log(message);
	console.log(current_user);

	show_sendmessage(current_user,user,message)
	message = current_user + ": " + message;
	console.log(message)
		$.ajax({
			url: "actions.php",
			//dataType: "json",
			data: {type: "actions", type: "pushnotification",user: user,message:message}
		}).done(function ( data ) {

	});
}

function show_sendmessage(from,to,message){
	$("#chat_area").append("<br>");
	$("#chat_area").append("<label class='label label-success'>"+from+"</label>");
	$("#chat_area").append("-><label class='label label-danger'>"+to+"</label>")
	$("#chat_area").append("<code>"+message+"</code>");
}

function show_receivemessage(from,to,message){
	$("#chat_area").append("<br>");
	$("#chat_area").append("<label class='label label-danger'>"+from+"</label>");
	$("#chat_area").append("<-<label class='label label-success'>"+to+"</label>")
	$("#chat_area").append("<code>"+message+"</code>");
}

function chat_getmessage(){
	current_user = $("#chat_currentuser").val();
	message = $(".noty_text").html();
	console.log(message);
	message_splitted = message.split(":");
	console.log(message_splitted);
	if(message_splitted.length > 1){
		show_receivemessage(message_splitted[0],current_user,message_splitted[1].trim());
	}

}



$.noty.defaults.callback.onShow = function() {chat_getmessage()}

