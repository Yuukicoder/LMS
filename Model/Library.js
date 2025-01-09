class Library{
    constructor(libraryName, catalog, members) {
        this.libraryName = libraryName;
        this.catalog = catalog;
        this.members = members;
    }
    getLibraryName(){
        return this.libraryName;
    }
    setLibraryName(libraryName){
        this.libraryName = libraryName;
    }
    getCatalog(){
        return this.catalog;
    }
    setCatalog(catalog){
        this.catalog = catalog;
    }
    getMembers(){
        return this.members;
    }
    setMembers(members){
        this.members = members;
    }
    
}