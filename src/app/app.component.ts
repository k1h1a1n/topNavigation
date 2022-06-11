import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'imagicNavigator';
  data: any;
  column1 :any;
  column2 : any;
  column3 : any;
  column4 : any;
  menuTabs = [
    { name: '', imgurl: "/assets/images/iMagic.png" },
    { name: "Life Insurance", imgurl: "/assets/images/LifeInsu_MenuIcon.png" },
    { name: "General Insurance", imgurl: "/assets/images/GeneralInsu_MenuIcon.png" },
    { name: "Common", imgurl: "/assets/images/CommonItem_MenuIcon.png" },
    { name: "Admin", imgurl: "/assets/images/Admin_MenuIcon.png" },
    { name: "Other", imgurl: "/assets/images/LifeInsu_MenuIcon.png" },
    { name: "My Rm", imgurl: "/assets/images/RM_Icon.png" },
    { name: "Deepali", imgurl: "/assets/images/user_image.png" },
  ]
  filteredData: any;
  removeHover: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.getData().subscribe(result => {
      this.data = result
      this.data = this.data['responseObject'];
      this.data = this.data.sort(function (a: { menuID: number; }, b: { menuID: number; }) {
        return a.menuID - b.menuID
      });
    })
  }
  loadMenus(idx: number , list: any) {
    this.removeHover = list.name;
    if (idx == 1) {
      this.filteredData = this.data.filter((data: { moduleID: number; }) => {
        return data.moduleID == idx
      });
    }
    else if (idx == 2) {
      this.filteredData = this.data.filter((data: { moduleID: number; }) => {
        return data.moduleID == idx
      });
    }
    else if (idx == 3) {
      this.filteredData = this.data.filter((data: { moduleID: number; }) => {
        return data.moduleID == idx
      });
    }
    else if (idx == 4) {
      this.filteredData = this.data.filter((data: { moduleID: number; }) => {
        return data.moduleID == idx
      });
    }
    this.column1 = this.filteredData.filter((result: { column: number; }) => {
      return result.column == 1
    })
    this.column2 = this.filteredData.filter((result: { column: number; }) => {
      return result.column == 2
    })
    this.column3 = this.filteredData.filter((result: { column: number; }) => {
      return result.column == 3
    })
    this.column4 = this.filteredData.filter((result: { column: number; }) => {
      return result.column == 4
    })
  }
  getData() {
    return this.http.get("./assets/data/data.json")
  }

}

