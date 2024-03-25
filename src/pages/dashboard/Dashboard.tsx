import CustomCard from '../../components/layout/CustomCard';
import CustomPopup from '../../components/popup/CustomModal';
import CustomCellTable from '../../components/tables/CustomCellTable';
import CustomTable from '../../components/tables/CustomTable';
import SimpleTable from '../../components/tables/SimpleTable';

export default function Dashboard() {
  return (
    <>
      <div>
        <h2 className="text-lg italic font-bold underline mb-5 mt-10">
          Custom Modal Components
        </h2>
        <div className="mt-5">
          <CustomPopup />
        </div>
      </div>
      <div>
        <h2 className="text-lg italic font-bold underline  mb-5 mt-10">
          Custom Grid and Cards
        </h2>
        <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-3 mt-5">
          <CustomCard />

          <CustomCard />

          <CustomCard />
        </div>
      </div>

      <div>
        <h2 className="text-lg italic font-bold underline mb-5 mt-10">
          Custom Tables
        </h2>
        <div className="mt-5">
          <SimpleTable />
        </div>
        <div className="mt-5">
          <CustomCellTable />
        </div>
        <div className="mt-5">
          <CustomTable />
        </div>
      </div>
    </>
  );
}
