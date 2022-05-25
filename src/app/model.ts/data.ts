export class menuListOutput{
    responseObject! : responseObject [] ;
}

export class responseObject{
    menuID! : number;
    menuName! : string
    moduleID! : number;
    level! : number;
    parentMenuID!: number;
    sequence! : number;
    url! : string;
}