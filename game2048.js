let table =document.getElementById('table');
let data = [];
//초기화()
//랜덤생성()
//그리기()

//초기화
function initialize(){
    /*
    DocumentFragment는 다른 노드를 담는 임시 컨테이너 역할을 하는 특수 목적의 노드이다.
     가상의 노드 객체로서, 메모리상에서만 존재하는 비 문서 탬플릿으로 생각하면 된다. parentNode 프로퍼티는 항상 null이다.
    하지만 Element처럼, appendChild()와 insertBefore()등으로 조작할 수 있는 자손 객체를 가질 수 있다. 
    */
    let fragment = document.createDocumentFragment();
    [1,2,3,4].forEach(function(){
        let colDatas = [];
        data.push(colDatas);
        let tr = document.createElement('tr');
        [1,2,3,4].forEach(function(){
            colDatas.push(0);
            let td = document.createElement('td');
            tr.appendChild(td);
        });
        table.appendChild(fragment);
    })
}

 function makeRandom(){
    let blankArray = [];
    data.forEach(function(coldata, i){
        coldata.forEach(function(rowdata,j){
            if(!rowdata){
                blankArray.push([i, j]);
            }
        });
    });
    let blank = blankArray[Math.floor(Math.random()*blankArray.length)];
    drow();
}

 function drow(){
     data.forEach(function(coldata, i){
         coldata.forEach(function(rowdata,j){
             if(rowdata > 0){
                 table.children[i].children[j].textContent = rowdata;
             } else {
                table.children[i].children[j].textContent = '';
             }
         });
     });
 }

 initialize();
 makeRandom();
 drow();