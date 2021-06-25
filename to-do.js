
fetch('tasks.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

    

    function appendData(data) {
        let taskContainer = document.getElementById('taskList');
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div");
            div.innerHTML = ' - ' + data[i].context + ' - ' + data[i].task;
            div.className = "gridBox";
            div.style.color = "white";
            taskContainer.appendChild(div);
            }
    }