import ImageGallery from "@/components/ImageGallery";

function imageLinks(total: number) {
  const arr = [];
  for (let i = 0; i < total; i++) {
    arr.push(`/assets/productsection/image${i + 1}.jpg`);
    // arr.push({
    //   original: `/assets/productsection/image${i + 1}.jpg`,
    //   thumbnail: `/assets/productsection/image${i + 1}.jpg`,
    // });
  }
  return arr;
}
// const myImages = imageLinks(24);

const images = imageLinks(24);

export const metadata = {
  title: "Products",
  description: "",
};

const coldCupsTable = (
  <>
    <h3 className="w-full text-center">Cold Cups</h3>
    <table>
      <thead>
        <tr>
          <th>Volume (oz/ml)</th>
          <th>Bottom Diameter (mm)</th>
          <th>Top Diameter (mm)</th>
          <th>Height (mm)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4.7 / 140</td>
          <td>46.3</td>
          <td>62.0</td>
          <td>70.0</td>
        </tr>
        <tr>
          <td>6.5 / 193</td>
          <td>50.1</td>
          <td>71.9</td>
          <td>72.0</td>
        </tr>
        <tr>
          <td>8 / 236</td>
          <td>54.6</td>
          <td>79.6</td>
          <td>92.0</td>
        </tr>
        <tr>
          <td>12 / 354</td>
          <td>52.1</td>
          <td>75.5</td>
          <td>117.0</td>
        </tr>
        <tr>
          <td>14 / 414</td>
          <td>55.6</td>
          <td>88.9</td>
          <td>117.0</td>
        </tr>
        <tr>
          <td>16 / 473</td>
          <td>58.6</td>
          <td>89.2</td>
          <td>128.0</td>
        </tr>
        <tr>
          <td>22 / 650</td>
          <td>62.2</td>
          <td>86.0</td>
          <td>168.0</td>
        </tr>
      </tbody>
    </table>
  </>
);

const hotCupsTable = (
  <>
    <h3 className="w-full text-center">Hot Cups</h3>
    <table>
      <thead>
        <tr>
          <th>Volume (oz/ml)</th>
          <th>Bottom Diameter (mm)</th>
          <th>Top Diameter (mm)</th>
          <th>Height (mm)</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>6.5 / 193</td>
          <td>50.1</td>
          <td>71.9</td>
          <td>72.0</td>
          <td>Handle Cup</td>
        </tr>
        <tr>
          <td>8 / 236</td>
          <td>54.6</td>
          <td>79.6</td>
          <td>92.0</td>
          <td>Hollow Rippled Double Wall</td>
        </tr>
        <tr>
          <td>8 / 236</td>
          <td>54.6</td>
          <td>86.0</td>
          <td>90.5</td>
          <td>Rippled Double Wall</td>
        </tr>
        <tr>
          <td>16 / 473</td>
          <td>62.0</td>
          <td>86.0</td>
          <td>133.0</td>
          <td>Rippled Double Wall</td>
        </tr>
        <tr>
          <td>22 / 650</td>
          <td>62.2</td>
          <td>86.0</td>
          <td>168.0</td>
          <td>Rippled Double Wall</td>
        </tr>
      </tbody>
    </table>
  </>
);

const iceCreamCupsTable = (
  <>
    <h3 className="w-full text-center">Ice-cream Cups</h3>
    <table>
      <thead>
        <tr>
          <th>Volume (oz/ml)</th>
          <th>Bottom Diameter (mm)</th>
          <th>Top Diameter (mm)</th>
          <th>Height (mm)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2.36 / 70 </td>
          <td>55.9</td>
          <td>69.0</td>
          <td>43.0</td>
        </tr>
        <tr>
          <td>2.70 / 80</td>
          <td>58.8</td>
          <td>73.0</td>
          <td>47.5</td>
        </tr>
        <tr>
          <td>3.38 / 100</td>
          <td>59.9</td>
          <td>75.1</td>
          <td>50.0</td>
        </tr>
        <tr>
          <td>3.38 / 100</td>
          <td>85.0</td>
          <td>72.0</td>
          <td>45.0</td>
        </tr>
      </tbody>
    </table>
  </>
);

const bowlsTable = (
  <>
    <h3 className="w-full text-center">Bowls</h3>
    <table>
      <thead>
        <tr>
          <th>Volume (oz/ml)</th>
          <th>Bottom Diameter (mm)</th>
          <th>Top Diameter (mm)</th>
          <th>Height (mm)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10 / 295</td>
          <td>95.6</td>
          <td>115.4</td>
          <td>83.0</td>
        </tr>
        <tr>
          <td>16 / 475</td>
          <td>78.5</td>
          <td>97.3</td>
          <td>70.0</td>
        </tr>
      </tbody>
    </table>
  </>
);

const saladTrays = (
  <>
    <h3 className="w-full text-center">Salad Trays</h3>
    <table>
      <thead>
        <tr>
          <th>Depth (mm)</th>
          <th>Length (mm)</th>
          <th>Width (mm)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>34.0</td>
          <td>138.0</td>
          <td>113.0</td>
        </tr>
        <tr>
          <td>34.0</td>
          <td>122.0</td>
          <td>97.0</td>
        </tr>
      </tbody>
    </table>
  </>
);

const paperPlates = (
  <>
    <h3 className="w-full text-center">Paper Plates</h3>
    <table>
      <thead>
        <tr>
          <th>Depth (mm)</th>
          <th>Diameter (mm)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>15.5</td>
          <td>190.0</td>
        </tr>
        <tr>
          <td>33.5</td>
          <td>202.0</td>
        </tr>
        <tr>
          <td>23.0</td>
          <td>214.5</td>
        </tr>
      </tbody>
    </table>
  </>
);

const plasticLids = (
  <>
    <h3 className="w-full text-center">Plastic Lids</h3>
    <table>
      <thead>
        <tr>
          <th>Cup size</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8 oz</td>
          <td>Cold Cups/Hot Cups</td>
        </tr>
        <tr>
          <td>12 oz</td>
          <td>Cold Cups/Hot Cups</td>
        </tr>
        <tr>
          <td>16 oz</td>
          <td>Cold Cups/Hot Cups</td>
        </tr>
        <tr>
          <td>22 oz</td>
          <td>Cold Cups/Hot Cups</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default function Products() {
  return (
    <main className="sectionPadding">
      <h3 className="py-20">
        Oaks Packaging produces paper disposable products ranging from 70ml
        ice-cream cups to 22oz drink glasses, paper trays, bowls and plates,
        these can be either ready-made in house designs or customized cups to
        showcase the personality of your brand.
      </h3>
      <section className="pb-12">
        <ImageGallery images={images} />
      </section>
      <section className="flex flex-col items-center gap-12 px-16 pb-12 md:items-stretch">
        <div>{coldCupsTable}</div>
        <div>{hotCupsTable}</div>
        <div>{iceCreamCupsTable}</div>
        <div>{bowlsTable}</div>
        <div>{saladTrays}</div>
        <div>{paperPlates}</div>
        <div>{plasticLids}</div>
      </section>
      <h3 className="pb-20">
        In addition to the above products we are also capable of providing
        services including corrugated paper, PE coating, slitting, dye-cutting
        and glueing.
      </h3>
    </main>
  );
}
