import React from 'react';
import Table from '../components/Table/Table';
import { TableColumn } from '../modules/Table';


const Home: React.FC = () => {
  const columns: TableColumn[]  = [
    { key: 'id', label: 'ID', sortable: true, fixed: 'left' ,width: '80'},
    { key: 'name', label: 'Name', sortable: true ,width: '80'},
    { key: 'age', label: 'Age', sortable: true ,width: '80'},
    { key: 'localtion', label: 'Localtion' ,width: '120'},
    { key: 'tel', label: 'Tel' ,width: '100'},
    { key: 'address', label: 'Address',width: '280' },
    { key: 'servicePhone', label: 'servicePhone',width: '120' },
    { key: 'email', label: 'Email', fixed: 'right' ,width: '50'},
  ];

  const data = [
    { id: 1, name: 'Lily Doe', age: 33, tel: '043430 41 18', localtion: 'Selnaustrasse 30  8001 Zürich', address:`1st Floor, Jiuan Plaza, No. 258 Tongren Road, Jing'an District, Shanghai, China (200040)`,servicePhone:'400 880 1965', email: 'Lily@example.com' },
    { id: 2, name: 'Jane Doe', age: 25, tel: '043430 41 18', localtion: 'Selnaustrasse 30  8001 Zürich', address:`1st Floor, Jiuan Plaza, No. 258 Tongren Road, Jing'an District, Shanghai, China (200040)`,servicePhone:'400 880 1965', email: 'Jane@example.com' },
    { id: 3, name: 'Cate Doe', age: 10, tel: '043430 41 18', localtion: 'Selnaustrasse 30  8001 Zürich', address:`1st Floor, Jiuan Plaza, No. 258 Tongren Road, Jing'an District, Shanghai, China (200040)`,servicePhone:'400 880 1965', email: 'Cate@example.com' },
    { id: 4, name: 'Max Doe', age: 4, tel: '043430 41 18', localtion: 'Selnaustrasse 30  8001 Zürich',  address:`1st Floor, Jiuan Plaza, No. 258 Tongren Road, Jing'an District, Shanghai, China (200040)`,servicePhone:'400 880 1965', email: 'Max@example.com' },
    { id: 5, name: 'John Doe', age: 5, tel: '043430 41 18', localtion: 'Selnaustrasse 30  8001 Zürich',  address:`1st Floor, Jiuan Plaza, No. 258 Tongren Road, Jing'an District, Shanghai, China (200040)`,servicePhone:'400 880 1965', email: 'John@example.com' },
    { id: 6, name: 'Dannel Doe', age: 6, tel: '043430 41 18', localtion: 'Selnaustrasse 30  8001 Zürich',  address:`1st Floor, Jiuan Plaza, No. 258 Tongren Road, Jing'an District, Shanghai, China (200040)`,servicePhone:'400 880 1965', email: 'Dannel@example.com' },
    { id: 7, name: 'Alex Doe', age: 7, tel: '043430 41 18', localtion: 'Selnaustrasse 30  8001 Zürich',  address:`1st Floor, Jiuan Plaza, No. 258 Tongren Road, Jing'an District, Shanghai, China (200040)`,servicePhone:'400 880 1965',  email: 'Alex@example.com' },
    { id: 8, name: 'Lucy Doe', age: 8, tel: '043430 41 18', localtion: 'Selnaustrasse 30  8001 Zürich',  address:`1st Floor, Jiuan Plaza, No. 258 Tongren Road, Jing'an District, Shanghai, China (200040)`,servicePhone:'400 880 1965', email: 'Lucy@example.com' },
    { id: 9, name: 'Jocy Doe', age: 19, tel: '043430 41 18', localtion: 'Selnaustrasse 30  8001 Zürich',  address:`1st Floor, Jiuan Plaza, No. 258 Tongren Road, Jing'an District, Shanghai, China (200040)`,servicePhone:'400 880 1965', email: 'Jocy@example.com' },
    { id: 10, name: 'Zeder Doe', age: 10, tel: '043430 41 18', localtion: 'Selnaustrasse 30  8001 Zürich',  address:`1st Floor, Jiuan Plaza, No. 258 Tongren Road, Jing'an District, Shanghai, China (200040)`,servicePhone:'400 880 1965', email: 'Zeder@example.com' },
    // 添加更多数据以测试分页和排序
  ];

  return (
    <div>
      <h1>Tabel Page</h1>
      <Table columns={columns} data={data} defaultPageSize={5} />
    </div>
  );
};

export default Home;
