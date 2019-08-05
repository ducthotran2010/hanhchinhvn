# Phân cấp hành chính Việt Nam

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
