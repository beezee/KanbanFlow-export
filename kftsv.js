(function($) {
    var str = '<tbody>';
    $('ul.task-list').each(function() {
        $(this).children().each(function() {
            str += '<tr>';
            str += '<td>'+$(this).find('h3').text()+'</td>';
            str += '<td>'+$(this).find('div.task-description').text()+'</td>';
            $(this).find('div.propertyValue').each(function() { str += '<td>' + $(this).text() + '</td>'});
            str += "</tr>";
        });
    });
    str += '</tbody>';
    var $table = $('<table id="toTable"></table');
    $table.html(str);
    var win = window.open();
    $('body').append($table);
    win.document.write('<table id="table"></table>');
    win.document.getElementById('table').innerHTML = window.document.getElementById('toTable').innerHTML;
    $('#toTable').remove();
}(jQuery))