// first i create the makeGrid function 


function makeGrid() {

// Select size input : i tried to delcare the variable outside the function but not able to acess correct value when i change the individual value so i had to declare it inside the function

let gridHeight=$("#inputHeight").val();
let gridWitdh=$("#inputWeight").val();

let i=0; // used to initialize my while loop

// Select color input
let colorPickerValue=$("#colorPicker").val();


// Create the total num of heigth with a while loop
while(i<gridHeight){

	$("table").append("<tr></tr>");	
i++	
}

// I append td to height (tr) elements previously created to create grid row

for(i=0; i<gridWitdh; i++){

		$("table tr").append("<td></td>");
	
}

}

// i noticed jquery could not select dynamically element added to the DOM so i found a function that can help select new element added to the DOM

	$("body").on("click", "table tr td", function(){
		
		let colorPickerValue=$("#colorPicker").val();
  		
		$(this).css("background-color",colorPickerValue);

});



// This is the button click event listener that, call makeGrid() when the submit button is clicked

	$("#submit").click(function(){
		
		//i clear all the content inside table element before calling the makeGrid to create new grid
			$("table").html("");
	
			makeGrid();

	})


// Note: i tried to use e.preventDefault() but couldnt get it to work when grid cell variables are submited so i instead change the form submit to a button "type="button".

