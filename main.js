$(document).ready(function(){
	
	$('#myModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget) // Button that triggered the modal
	  var recipient = button.data('w')
	  var r = button.data('f'); // Extract info from data-* attributes
	  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this)
	  console.log(22);
	  modal.find('.modal-title').text(recipient)
	  modal.find('.modal-body').text(r)
	  modal.find('.modal-body input').val(recipient)
	})	

	/**************************************/
})

function get(){
	$("#b1,#b2").datepicker();
}


function bring(){
	
	// For the following functionality the appendChild method is also used but the below method 
	// looked faster!
	// var mod = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel"></h4></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button>			        </div></div></div></div>';
	var elem = '<div id="t1" class="col-md-5 col-md-offset-1"><h4 style="display:inline;">Mr. XYZ</h4><b>, </b><h4 style="display:inline;">Head of ABC</h4><br><br><button id="b1" class="btn btn-default" data-toggle="modal" data-target="#myModal" data-w="Mr. XYZ" data-f="quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit.">Details</button><button id="b2" class="btn btn-primary">Book a Session.</button>	</div><div id="t2" class="col-md-5"><h4 style="display:inline;">Mr. JKL</h4><b>, </b><h4 style="display:inline;">Head of ABC</h4><br><br><button id="b1" class="btn btn-default" data-toggle="modal" data-target="#myModal" data-w="Mr. JKL" data-f="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,">Details</button><button id="b2" class="btn btn-primary">Book a Session.</button></div>';
	document.getElementById('div22').innerHTML = elem; 
	// document.getElementById('div22').innerHTML += mod; 

}

function bring1(){
	var elem = '<div id="t1" class="col-md-5 col-md-offset-1"><h4 style="display:inline;">Mr. XYZ</h4><b>, </b><h4 style="display:inline;">Head of ABC</h4><br><br><button id="b1" class="btn btn-default" data-toggle="modal" data-target="#myModal" data-w="Mr. XYZ" data-f="quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit.">Details</button><button id="b2" class="btn btn-primary">Book a Session.</button>	</div><div id="t2" class="col-md-5"><h4 style="display:inline;">Mr. JKL</h4><b>, <b><h4 style="display:inline;">Head of ABC</h4><br><br><button id="b1" class="btn btn-default" data-toggle="modal" data-target="#myModal" data-w="Mr. JKL" data-f="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,">Details</button><button id="b2" class="btn btn-primary">Book a Session.</button></div>';
	// var mod = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel"></h4></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button>			        </div></div></div></div>';
	document.getElementById('div22').innerHTML =elem;
	document.getElementById('div22').innerHTML +=elem; 
	// document.getElementById('div22').innerHTML += mod;
}
