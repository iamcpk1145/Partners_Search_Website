/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('#find_your_partners_button').click(function() {
        document.querySelector('.find_partners_form').style.display = 'block';
    });
    
    $('#find_partners_form_close').click(function() {
        document.querySelector('.find_partners_form').style.display = 'none';
    })
    
    $('#form_type').selectmenu({
       width: 200,
       height: 100,
       
    });
    
    
    $('#form_deadline').datepicker({ 
        changeYear: true,
        chnageMonth: true,
        dateFormat: 'm-dd-yy',
   
    });
    
    $('#find_partners_form_button').click(function() {
        var project_title = $('#form_title').val();
        var project_type = $('#form_type').val();
        var project_content = $('#form_projectcontent').val();
        var project_deadline = $('#form_deadline').val();
        var project_name = $('#form_name').val();
        var project_email = $('#form_email').val();
        var project_tel = $('#form_tel').val();
        
        
        var project_html = ''
        project_html +='<ul id="project_lists"><li class="show"><span id="showmore"><i class="fas fa-plus"></i></span>'+'   ' + project_title + '</li>'
                     + '<li class="hide">' + project_content + '</li>'
                     + '<li class="hide">' + project_deadline + '</li>'
                     + '<li class="hide">' + project_name + '</li>'
                     + '<li class="hide">' + project_email + '</li>'
                     + '<li class="hide">' + project_tel + '</li>'
                     + '</ul>'
                     
        var $newProject = $(project_html);

        $('#project_list').prepend($newProject);
        document.querySelector('.find_partners_form').style.display = 'none';
        $('.hide').hide();
    });
    
   $(document).on('click','#showmore',function() {

       $('.show').nextAll('li.hide').slice(0,5).slideDown();
       $('#showmore').find('i').remove();
       var newshowme1 = '<i class="fas fa-minus"></i>';
       $('#showmore').prepend(newshowme1);
       $('#showmore').attr('id','showless');
       $('.hide').attr('class','showed');
   });
   
   $(document).on('click','#showless',function() {
       $('.show').nextAll('li.showed').slice(0,5).fadeOut();
       $('#showmore').find('i').remove();
       var newshowme2 = '<i class="fas fa-plus"></i>';
       $('#showmore').prepend(newshowme2);
       $('#showless').attr('id','showmore');
       $('.showed').attr('class','hide');
   
   });

    
});

