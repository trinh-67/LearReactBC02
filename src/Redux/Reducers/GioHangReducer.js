const stateDefault = {
    gioHang:[
        {maSP:1,tenSP:'Iphone',giaBan:1000,hinhAnh:'./img/applePhone.jpg',soLuong:1},
    ]
}

export const gioHangReducer = (state = stateDefault,action) => {

    switch (action.type) {
        case 'Them gio hang':{
            //xu ly thay doi  state.gioHang tren redux 
            //console.log('object',action)
            //Buoc 1: sao chep gio hang ra arraymoi
            const gioHangUpdate = [...state.gioHang]
            //Buoc 2: kiem tra action.spGioHang gui len tu component co trong state.gioHang chua?
            let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.spGioHang.maSP)
           
            if(index !== -1) {
                gioHangUpdate[index].soLuong += 1;
            }else {
                gioHangUpdate.push(action.spGioHang);
            }
            //buoc 3: Cap nhat lai state.gioHang => buoc nay giong nhu this.setState tai component
            state.gioHang = gioHangUpdate;

            return {...state} //...du lieu moi, du lieu text khg can them ...
        }break;
        case 'Thay_doi_so_luong':{
            const gioHangUpdate = [...state.gioHang];
            //kiem tra san pham co trong gio hang khong
            let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSP);

            if(index !== -1){
                gioHangUpdate[index].soLuong += action.soLuong
                if (gioHangUpdate[index].soLuong <= 0) {
                    alert("min 1")
                    gioHangUpdate[index].soLuong -= action.soLuong;
                    
                }
            }
            //Cap nhat lai state
            state.gioHang = gioHangUpdate;
            return {...state};
        }
        case 'Xoa_SP': {
            let gioHangUpdate = [...state.gioHang];
            //xu ly xoa gio hang
            gioHangUpdate = gioHangUpdate.filter(spGH => spGH.maSP !== action.maSP);

            //cap nhat lai state gio hang
            state.gioHang = gioHangUpdate;
            return {...state};
        }
    }
    return {...state}

}