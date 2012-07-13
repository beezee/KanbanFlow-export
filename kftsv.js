(function($) {
    function formatTime(t) {
        if (!/[\d]+h/.test(t) && !/[\d]+m/.test(t)) return t;
        var ha = t.match(/([\d]+)h/), ma = t.match(/([\d]+)m/), h = (ha && ha[1]) ? parseInt(ha[1]) : 0, m = (ma && ma[1]) ? parseInt(ma[1]) : 0;
        console.log(ha, h, ma, m);
        return (((h*60) + m) / 60).toFixed(1);
    }
    var str = '<tbody>';
    $('ul.task-list').each(function() {
        $(this).children().each(function() {
            str += '<tr>';
            str += '<td>'+$(this).find('h3').text()+'</td>';
            str += '<td>'+$(this).find('div.task-description').text()+'</td>';
            $(this).find('div.propertyValue').each(function() { str += '<td>' + formatTime($(this).text()) + '</td>'});
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