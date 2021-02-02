function HomeController(Movies, myList){

    const movieListFilter = (el, val) => {
        if(el === "genres") {
            return Movies.length && Movies.filter((i) => i.genres.indexOf(val) !== -1);
        }
        if(el === "myList") {
            return myList.map(item => Movies.find(m => m.id === item));
        }
    }

    return [movieListFilter];
}

export default HomeController;