class Librian{
    constructor(LibraryName, catalog, members) {
        this.LibraryName = LibraryName;
        this.catalog = catalog;
        this.members = members;
    }
    // registerMember(member){}
    // unregisterMember(member){}
    getLibraryName(){
        return this.LibraryName
    }
    setLibraryName(LibraryName){
        this.LibraryName = LibraryName;
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