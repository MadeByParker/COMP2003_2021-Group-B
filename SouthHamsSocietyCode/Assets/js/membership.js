



//storing login information

function goLogin() {
    var myFormData = [];   //declare an array
    var value1 = document.getElementById("inputEmail").value;  //get the value of an element by it's id
    myFormData.push(value1); //put to the array
    var value2 = document.getElementById("inputPassword").value;
    myFormData.push(value2); //put to the array
    console.log(value1, value2); 
    var valid = false;
    var usernameArray = ["test1234@outlook.com", "richard@shs.co.uk"];
    var passwordArray = ["123456", "test1234"];

    for (var i = 0; i < usernameArray.length; i++){
        if(value1 == usernameArray[i] && value2 == passwordArray[i]){
            valid = true;
            break;
        }
        else {
            alert("Login failed");
        }
    }

    if(valid){
        alert("Login successful");
        location.href = "../Membership/Account.html";
        return false;
    }

}

$(document).ready(function() {
    var max_fields = 4;
    var wrapper = $(".addedPerson");
    var add_button = $("#addPerson");

    var x = 1;
    $(add_button).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append('<div><div class="mb-3 form-group"><label for="FormSelectTitle">Title<span style="color: red"> * </span><i class="fas fa-info-circle"></i></label><select class="form-control" id="FormSelectTitle"><option selected>Title</option><option value="1">Mr</option><option value="2">Mrs</option><option value="3">Ms</option><option value="4">Miss</option><option value="5">Dr</option><option value="6">Professor</option></select></div><div class="mb-3 form-group"><label for="firstNameInput">First Name</label><input type="text" class="form-control" id="firstNameInput" placeholder="First Name" value="" required><div class="invalid-feedback">Please enter your first name.</div></div><div class="mb-3 form-group"><label for="lastNameInput">Last Name</label><input type="text" class="form-control" id="lastNameInput" placeholder="Last Name" value="" required><div class="invalid-feedback">Please enter your last name.</div></div><div class="mb-3 form-group"><label for="AddressInput">Address</Address><span style="color: red"> * </span><i class="fas fa-info-circle"></i></label><input type="text" class="form-control" id="AddressInput" placeholder="Address" value="" required><div class="invalid-feedback">Please enter a valid address.</div></div><a href="#signupform" class="btn btn-outline-danger delete">Delete</a></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })

    //with jquery
$('#customCheck1').click(function() {
   if( $(this).is(':checked')) {
      $(".Standing-Order-Individual-Section").show();
   } else {
      $(".Standing-Order-Individual-Section").hide();
   }
  });

});

//Varun Dewan 2019
var $ = {
    get: function(selector){ 
       var ele = document.querySelectorAll(selector);
       for(var i = 0; i < ele.length; i++){
          this.init(ele[i]);
       }
       return ele;
    },
    template: function(html){
       var template = document.createElement('div');
       template.innerHTML = html.trim();
       return this.init(template.childNodes[0]);
    },
    init: function(ele){
       ele.on = function(event, func){ this.addEventListener(event, func); }
       return ele;
    }
 };
 
 //Build the plugin
 var drop = function(info){var o = {
    options: info.options,
    selected: info.selected || [],
    preselected: info.preselected || [],
    open: false,
    html: {
       select: $.get(info.selector)[0],
       options: $.get(info.selector + ' option'),
       parent: undefined,
    },
    init: function(){
       //Setup Drop HTML
       this.html.parent = $.get(info.selector)[0].parentNode
       this.html.drop = $.template('<div class="drop"></div>')
       this.html.dropDisplay = $.template('<div class="drop-display">Display</div>')
       this.html.dropOptions = $.template('<div class="drop-options">Options</div>')
       this.html.dropScreen = $.template('<div class="drop-screen"></div>')
       
       this.html.parent.insertBefore(this.html.drop, this.html.select)
       this.html.drop.appendChild(this.html.dropDisplay)
       this.html.drop.appendChild(this.html.dropOptions)
       this.html.drop.appendChild(this.html.dropScreen)
       //Hide old select
       this.html.drop.appendChild(this.html.select);
       
       //Core Events
       var that = this;
       this.html.dropDisplay.on('click', function(){ that.toggle() });
       this.html.dropScreen.on('click', function(){ that.toggle() });
       //Run Render
       this.load()
       this.preselect()
       this.render();
    },
    toggle: function(){
       this.html.drop.classList.toggle('open');
    },
    addOption: function(e, element){ 
       var index = Number(element.dataset.index);
       this.clearStates()
       this.selected.push({
          index: Number(index),
          state: 'add',
          removed: false
       })
       this.options[index].state = 'remove';
       this.render()
    },
    removeOption: function(e, element){
       e.stopPropagation();
       this.clearStates()
       var index = Number(element.dataset.index);
       this.selected.forEach(function(select){
          if(select.index == index && !select.removed){
             select.removed = true
             select.state = 'remove'
          }
       })
       this.options[index].state = 'add'
       this.render();
    },
    load: function(){
       this.options = [];
       for(var i = 0; i < this.html.options.length; i++){
          var option = this.html.options[i]
          this.options[i] = {
             html:  option.innerHTML,
             value: option.value,
             selected: option.selected,
             state: ''
          }
       }
    },
    preselect: function(){
       var that = this;
       this.selected = [];
       this.preselected.forEach(function(pre){
          that.selected.push({
             index: pre,
             state: 'add',
             removed: false
          })
          that.options[pre].state = 'remove';
       })
    },
    render: function(){
       this.renderDrop()
       this.renderOptions()
    },
    renderDrop: function(){ 
       var that = this;
       var parentHTML = $.template('<div></div>')
       this.selected.forEach(function(select, index){ 
          var option = that.options[select.index];
          var childHTML = $.template('<span class="item '+ select.state +'">'+ option.html +'</span>')
          var childCloseHTML = $.template(
             '<i class="material-icons btnclose" data-index="'+select.index+'">&#xe5c9;</i></span>')
          childCloseHTML.on('click', function(e){ that.removeOption(e, this) })
          childHTML.appendChild(childCloseHTML)
          parentHTML.appendChild(childHTML)
       })
       this.html.dropDisplay.innerHTML = ''; 
       this.html.dropDisplay.appendChild(parentHTML)
    },
    renderOptions: function(){  
       var that = this;
       var parentHTML = $.template('<div></div>')
       this.options.forEach(function(option, index){
          var childHTML = $.template(
             '<a data-index="'+index+'" class="'+option.state+'">'+ option.html +'</a>')
          childHTML.on('click', function(e){ that.addOption(e, this) })
          parentHTML.appendChild(childHTML)
       })
       this.html.dropOptions.innerHTML = '';
       this.html.dropOptions.appendChild(parentHTML)
    },
    clearStates: function(){
       var that = this;
       this.selected.forEach(function(select, index){ 
          select.state = that.changeState(select.state)
       })
       this.options.forEach(function(option){ 
          option.state = that.changeState(option.state)
       })
    },
    changeState: function(state){
       switch(state){
          case 'remove':
             return 'hide'
          case 'hide':
             return 'hide'
          default:
             return ''
        }
    },
    isSelected: function(index){
       var check = false
       this.selected.forEach(function(select){ 
          if(select.index == index && select.removed == false) check = true
       })
       return check
    }
 }; o.init(); return o;}
 
 
 //Set up some data
 var options = [
    { html: 'cats', value: 'cats' },
    { html: 'fish', value: 'fish' },
    { html: 'squids', value: 'squids' },
    { html: 'cats', value: 'whales' },
    { html: 'cats', value: 'bikes' },
 ];
 
 var myDrop = new drop({
    selector:  '#myMulti',
    preselected: [0, 2]
 });
  myDrop.toggle();