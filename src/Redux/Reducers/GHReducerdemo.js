const stateDefault = {
    gioHang: [
        {
            maSP:1,tenSP:'Iphone',giaBan:1000,hinhAnh:'./img/applePhone.jpg',soLuong:1,
        }
    ]
}

export const gioHangReducer = (state = stateDefault,action) =>{
    switch (action.type) {
        case 'Them gio hang':{
            //xu ly thay doi state.gioHang tren redux 
            //buoc 1: sao chep gio hang ra arraymoi
            const gioHangUpdate = [...state.gioHang]
            //buoc 2: kiem tra action.spGioHang gui len tu componnet co trong state.gioHang chua?
            let index = gioHangUpdate.findIndex(spGH =>spGH.maSP === action.spGioHang.maSP)

            if(index !== -1){
                gioHangUpdate[index].soLuong += 1
            }else {
                gioHangUpdate.push(action.spGioHang);
            }
            //buoc 3: cap nhat lai state.gioHang => buoc nay giong nhu this.setState tai component
            state.gioHang = gioHangUpdate;
            return {...state}//..du lieu moi, du lieu text khong can them...
        } break;
    }
    return {...state}  
           
    }