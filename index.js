fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка загрузки JSON');
    }
    return response.json();
  })
  .then(data => {
    let max = data[0].amount
    console.log(max)
    for (const item of data) {
        if (item.amount > max) {
            max = item.amount
        }
    };

    for (const item of data) {
        let curr_height = 150 / (max / item.amount)
        document.querySelector("." + item.day).style.height = curr_height + "px"
        document.querySelector("." + item.day + "-money").innerHTML = "$ " + item.amount
        if (item.amount == max) {
            document.querySelector("." + item.day).style.backgroundColor = "hsl(186, 34%, 60%)";
        }
    };
    let all_hovers = [document.querySelector(".hover-mon"),
                    document.querySelector(".hover-tue"),
                    document.querySelector(".hover-wed"),
                    document.querySelector(".hover-thu"),
                    document.querySelector(".hover-fri"),
                    document.querySelector(".hover-sat"),
                    document.querySelector(".hover-sun")]
    const diagramOne = [document.querySelector(".ind-0"),
                        document.querySelector(".ind-1"),
                        document.querySelector(".ind-2"),
                        document.querySelector(".ind-3"),
                        document.querySelector(".ind-4"),
                        document.querySelector(".ind-5"),
                        document.querySelector(".ind-6")]

    diagramOne.forEach(function(div, index) {
        div.addEventListener("mouseover", function() {
            // При наведении на элемент div, покажем соответствующий ховер
            all_hovers[index].style.display = "block";
        });
    
        div.addEventListener("mouseout", function() {
            // При уходе с элемента div, скроем соответствующий ховер
            all_hovers[index].style.display = "none";
        });
    });
    //height = 150 / (max_money / curr money)
    console.log(max)

  })
  .catch(error => {
    console.error('Error:', error);
  });