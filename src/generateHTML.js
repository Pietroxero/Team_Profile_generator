//Running small test array for clarity on join separator
// let myArray = ["one", "two", "three"];
// let output = myArray.join(' ');
// console.log(output);

//here will create const objects/functions where JS will generate our HTML page, cards, style and values.
const renderPage = (data) => {
  const team = renderTiles(data);
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Generator</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Press+Start=2P:wght@300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>
<body>
<div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 bg-danger">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
            ${team}
            </div>
        </div>
    </div>
</body>
</html>
`;
}

//here is where we outline the cards(tiles) to be created and printed onto the page
const renderTiles = data => {
    const manager = data.manager.map (function (tile) {
        return `
        <div class="card mr-3 shadow">
    <div class="card-header bg-primary text-light">
        <h2 class="card-title">${tile.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Product Manager</h3>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group">
            <li class="list-group-item">ID: ${tile.badge}</li>
            <li class="list-group-item">Email: <a href="mailto:${tile.email}">${tile.email}</a></li>
            <li class="list-group-item">Office number: ${tile.office}</li>
        </ul>
    </div>
</div>`
})

const dev = data.engineer.map (function (tile) {
    return `
    <div class="card mr-3 shadow">
        <div class="card-header bg-primary text-light">
            <h2 class="card-title">${tile.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${tile.badge}</li>
                <li class="list-group-item">Email: <a href="mailto:${tile.email}">${tile.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${tile.github}" target="_blank" rel="noopener noreferrer">${tile.github}</a></li>
            </ul>
        </div>
    </div>
    `
})

const intern = data.intern.map (function (tile) {
    return `
    <div class="card mr-3 shadow">
        <div class="card-header bg-primary text-light">
            <h2 class="card-title">${tile.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${tile.badge}</li>
                <li class="list-group-item">Email: <a href="mailto:${tile.email}">${tile.email}</a></li>
                <li class="list-group-item">School: ${tile.school}</li>            
                </ul>
        </div>
    </div>
    `
})

return manager.concat(dev).concat(intern);
}

module.exports=renderPage;
