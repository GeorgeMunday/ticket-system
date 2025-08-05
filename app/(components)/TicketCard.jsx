import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="w-full flex flex-col bg-gray-600 text-white rounded-lg shadow border border-gray-200 hover:shadow-md transition p-5">
      <div className="flex items-center justify-between mb-3">
        <PriorityDisplay />
        <DeleteBlock />
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-1">
        Implement login flow
      </h4>
      <hr className="border-gray-300 my-2" />
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        This ticket includes the full login implementation with OAuth2 and
        session management.
      </p>
      <div className="flex justify-between items-end mt-auto pt-3">
        <div className="flex flex-col text-xs text-gray-500">
          <span className="mb-1">Created: 08.05.2021</span>
          <ProgressDisplay />
        </div>
        <StatusDisplay />
      </div>
    </div>
  );
};

export default TicketCard;
