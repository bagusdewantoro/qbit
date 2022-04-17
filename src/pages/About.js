
import {
  dataPendidikan,
  dataOrganisasi,
  dataPekerjaan,
} from './aboutData';

const HeaderPendidikan = () => {
  return (
    <thead>
      <tr>
        <th>Tahun</th>
        <th>Tingkatan</th>
        <th>Nama Sekolah/Kampus</th>
      </tr>
    </thead>
  )
};

const HeaderPekerjaan = () => {
  return (
    <thead>
      <tr>
        <th>Tahun</th>
        <th>Kantor</th>
        <th>Posisi</th>
        <th>Deskripsi</th>
      </tr>
    </thead>
  )
};

const HeaderOrganisasi = () => {
  return (
    <thead>
      <tr>
        <th>Tahun</th>
        <th>Organisasi</th>
        <th>Posisi</th>
        <th>Kegiatan</th>
      </tr>
    </thead>
  )
};

const About = () => {
  return (
    <div>
      <h3>Octavianus Bagus Dewantoro</h3>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Alamat</td>
            <td>Cordella Townhouse A7 - Pondok Benda - Pamulang</td>
          </tr>
          <tr>
            <td>Github</td>
            <td>
              <a
                href='https://github.com/bagusdewantoro'
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/bagusdewantoro
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* pendidikan */}
      <h3>Pendidikan Formal</h3>
      <table>
        <HeaderPendidikan />
        <tbody>
          {dataPendidikan.map((row, index) => (
            <tr key={index}>
              <td>{row.tahun}</td>
              <td>{row.tingkat}</td>
              <td>{row.sekolah}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pekerjaan */}
      <h3>Pengalaman Kerja</h3>
      <table>
        <HeaderPekerjaan />
        <tbody>
          {dataPekerjaan.map((row, index) => (
            <tr key={index}>
              <td>{row.tahun}</td>
              <td>{row.kantor}</td>
              <td>{row.posisi}</td>
              <td>{row.deskripsi}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* organisasi */}
      <h3>Organisasi</h3>
      <table>
        <HeaderOrganisasi />
        <tbody>
          {dataOrganisasi.map((row, index) => (
            <tr key={index}>
              <td>{row.tahun}</td>
              <td>{row.org}</td>
              <td>{row.posisi}</td>
              <td>{row.kegiatan}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
}

export default About;
