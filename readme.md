# Phân cấp hành chính Việt Nam

<<<<<<< HEAD
Phân cấp hành chính Việt Nam.

## Cấu trúc thư mục:

- `provinces.json` - Chứa thông tin cấp tỉnh, thành phố
- `districts.json` - Chứa thông tin cấp huyện, thị xã
- `generated.json` - Chứa thông tin đã sắp xếp theo tên các tỉnh, thành phố được combined và huyện, thị xã theo cấu trúc sau:

```ts
interface district {
  code: string;
  name: string;
  type: string;
  slug: string;
  name_with_type: string;
  path: string;
  path_with_type: string;
  parent_code: string;
}

interface province {
  code: string;
  name_with_type: string;
  type: string;
  slug: string;
  name: string;
  districts: district[];
}

type generated = province[];
```

### Development

```sh
npm run generate
# or
yarn generate
```

Hope it help!
=======
Phân cấp hành chính Việt Nam export từ nguồn Tổng Cục Thống Kê.

### Cấu trúc thư mục:

- **excel_files/**: thư mục chứa các file excel lấy từ Tổng Cục Thống Kê
- **dist/**: thư mục chứa các file đã được trích xuất dạng json
- `export.php`: export file json từ file excel
- `include.php`: thư viện chung

### Thư mục `dist/`

- `tinh_tp.json`: thông tin về các tỉnh, thành phố
- `quan_huyen.json`: thông tin về các quận, huyện, thị xã, thành phố trực thuộc tỉnh
- `xa_phuong.json`: thông tin về các xã, phường, thị trấn
- `tree.json`: cấu trúc hành chính dạng cây thư mục
- **quan_huyen/**: thư mục chứa các file json là thông tin các quận, huyện, thị xã, thành phố trực thuộc của một tỉnh. Tên file là mã của tỉnh. Dùng để truy vấn ở client. Ví dụ: `quan_huyen/92.json` là thông tin các quận, huyện,... của tỉnh có mã **92**.
- **xa_phuong/**: thư mục chứa các file json là thông tin các xã, phường, thị trấn của một quận, huyện,.... Tên file là mã của quận, huyện, thị xã hoặc thành phố trực thuộc tỉnh. Dùng để truy vấn ở client. Ví dụ: `xa_phuong/92.json` là thông tin các xã, phường,... của quận/huyện có mã **92**.

### Nguồn dữ liệu

**Tổng Cục Thống Kê**: [http://www.gso.gov.vn/dmhc2015/](http://www.gso.gov.vn/dmhc2015/)
>>>>>>> 21d152eb0fdc178882a80b13e987741f4c3f2275
