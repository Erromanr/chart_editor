export default function convertDataReverse(data) {
    let series = [];
    let seriesTo = [];
    let seriesName = [];
    let finalSeries = [];
    let val = 0;


    let name = [];
    data[1].map(item => {
          if(item.value) {
              name.push(item.value);
          }
    });
     let columnName = name.slice(1); // for switch row and column
    let arr = data.slice(2);
    arr.map((item) => {
       let mass = [];
        item.map((item) => {
            if(!item.readOnly && item.value !== "") {
                if(!item.label) {
                    mass.push(+item.value);

                }
            }
        })
        seriesTo.push(mass);


    })
    seriesTo.map((item) => {
             if(val < item.length) {
                  val = item.length;
              }
           })
    let value = columnName.length > val ? columnName.length :val;
    for(let i =0 ; i< value; i++) {
       if(columnName[i]) {
            finalSeries.push({
            name:columnName[i],
            data:seriesTo[i],
        })
       }
       else {
            finalSeries.push({
            data:seriesTo[i],
        })
       }
    }
    return finalSeries;
}