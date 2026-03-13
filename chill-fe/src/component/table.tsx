/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchIcon from "../../assets/icons/Icon-left.svg";
// import FilterIcon from "../icon/filter-icon";
// import ButtonDownload from "../icon/button-download";
// import CalenderIcon from "../../assets/icons/calendar.svg";
// import ArrowDown from "../../assets/icons/chevron-down.svg";
import PreviousPageIcon from "../component/icon/PreviousPageIcon";
import NextPageIcon from "../component/icon/NextPageIcon";
import FilterIcon from "../component/icon/FilterIcon";
//import SidebarFilter from "./sidebar-filter.tsx";
import React, { useEffect, useState } from "react";
import LoadingOutlined from "@/components/shared/loading-outlined";

interface IProps {
    onRowClick?: (rowData: any) => void;
    hasExport?: boolean;
    hasDateFilter?: boolean;
    filterValue?: {
        search?: string;
        start_date?: string;
        end_date?: string;
    };
    headers?: {
        name?: string;
        key: string;
        type: "action" | "text" | "date_time" | "widget";
    }[];
    loading: boolean;
    data: any[];
    paginationConfig?: {
        total_page: number;
        current_page: number;
    };
    pageAction: (action: "previous" | "next") => void;
    filter?: (key: string, value: string) => void;
    customFilter?: React.ReactElement[];
    getFilter?: (data: Record<string, string>) => void;
    hasSearchFilter?: boolean;
    hasSidebarFilter?: boolean;
    customHeader?: React.ReactElement;
}

const PageButton = ({
    number,
    current_page,
}: {
    number: number;
    current_page: number;
}) => (
    <div
        className={`h-[24px] w-[24px] text-[#98A2B3] inter-400 text-[14px] flex items-center justify-center ${number === current_page && "bg-[#E4FFF0] text-primary rounded-[6px]"
            }`}
    >
        {number}
    </div>
);

export const Table = ({
    headers,
    loading,
    data,
    paginationConfig,
    pageAction,
    filter,
    onRowClick,
    filterValue,
    hasExport,
    hasDateFilter,
    customFilter,
    getFilter,
    hasSearchFilter = true,
    hasSidebarFilter = true,
    customHeader,
}: IProps) => {
    const pageList = Array.from(
        { length: paginationConfig?.total_page as number },
        (_, i) => i + 1
    );

    const [filterOpen, setFilterOpen] = useState(false);

    const [filterData, setFilterData] = useState<Record<string, any>>({
        start_date: "",
        end_date: "",
        download: false as any
    });

    useEffect(() => {
        if (filterValue) setFilterData({ ...filterValue })
    }, [filterValue]);

    const onFilterChange = (key: string, value: string) => {
        setFilterData({ ...filterData, [key]: value });
    }

    const onToggleFilter = () => {
        setFilterOpen(!filterOpen);
    }

    const onApplyFilter = () => {
        getFilter && getFilter(filterData);
        onToggleFilter();
    }

    const onResetFilter = () => {
        const filterDataRecord = { ...filterData }

        for (const key in filterDataRecord) {
            filterDataRecord[key] = "";
        }

        setFilterData(filterDataRecord);

        getFilter && getFilter(filterDataRecord);
        onToggleFilter();
    }

    return (
        <>

            <div
                className="w-full flex flex-col overflow-auto justify-between  border-[#E4E7EC] border-[1px] rounded-[16px] bg-[#FFFFFF] mt-[16px]">

                <div className="flex flex-col overflow-y-auto ">
                    <div
                        className="select-none cursor-pointer rounded-tl-[16px] rounded-tr-[16px] w-full p-[16px] flex justify-between items-center max-md:flex-col max-md:gap-[16px] ">

                        {customHeader && customHeader}

                        <div>
                            {
                                hasSearchFilter && (
                                    <div className="flex items-center max-md:flex-col max-md:items-start gap-[8px]">
                                        <div
                                            className="h-[36px] w-[291px] flex items-center gap-[8px] border-[1px] p-[0_12px] border-[#D0D5DD] rounded-[6px] shadow-[0px_2px_4px_-2px_#0000000A]">
                                            <img src={SearchIcon} />
                                            <input
                                                onChange={(e: any) =>
                                                    filter && filter("search", e.target.value)
                                                }
                                                value={filterValue?.search}
                                                placeholder="search here...."
                                                className="w-full outline-0 placeholder:text-[#667185] text-[14px] inter-400"
                                            />
                                        </div>


                                    </div>
                                )
                            }
                        </div>

                        {
                            hasSidebarFilter && (

                                <div
                                    className="flex items-center gap-[18px] max-md:flex-col max-md:items-start max-md:w-full">
                                    {/*{hasExport && (*/}
                                    {/*    <div*/}
                                    {/*        className="inter-600 h-[36px] w-[140px] max-md:w-full text-[#344054] text-[14px] flex items-center gap-[8px] border-[1px] border-[#D0D5DD] p-[0_12px] rounded-[6px]">*/}
                                    {/*        <ButtonDownload/>*/}
                                    {/*        Export CSV*/}
                                    {/*    </div>*/}
                                    {/*)}*/}

                                    {/*{hasDateFilter && (*/}
                                    {/*    <div*/}
                                    {/*        className="inter-600 h-[36px]  max-md:w-full  text-[#344054] text-[14px] flex items-center gap-[8px] border-[1px] border-[#D0D5DD] p-[0_12px] rounded-[6px]">*/}
                                    {/*        <img src={CalenderIcon}/>*/}
                                    {/*        Select Dates*/}
                                    {/*        <img src={ArrowDown}/>*/}
                                    {/*    </div>*/}
                                    {/*)}*/}

                                    <div
                                        onClick={onToggleFilter}
                                        className="inter-600 h-[36px] text-[#344054] text-[14px] flex items-center gap-[8px] border-[1px] border-[#D0D5DD] p-[0_12px] rounded-[6px]">
                                        <FilterIcon />
                                        Filter
                                    </div>
                                </div>
                            )
                        }


                    </div>

                    <div className="overflow-y-auto">
                        <table className="w-full h-full table-fixed  !table-auto">
                            <thead className=" bg-[#F9FAFB]">
                                <tr className="text-start border-b-[#E5E7EB] border-b-[1px] h-[48px]">
                                    {headers?.map((header, index: number) => (
                                        <th

                                            className={`p-[12px_10px] text-start font-[500] text-[12px] leading-[17.4px] ${header?.key === "s_n" ? "!text-center" : ""
                                                }`}

                                            key={index}
                                        >
                                            {header?.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            {data?.length > 0 && (
                                <tbody>
                                    {data?.map((item: any, index: number) => (
                                        <tr
                                            key={index}
                                            className="border-b-[#E5E7EB] border-b-[1px] cursor-pointer text-wrap min-w-[25%]"
                                            onClick={() => onRowClick?.(item)}
                                        >
                                            {headers?.map((header, tdIndex: number) => (
                                                <td
                                                    className={`p-[12px_10px] !text-[#344054] select-none !inter-400 text-[14px] ${header?.key === "s_n" ? "!text-center" : ""
                                                        }`}
                                                    key={`${tdIndex}-td`}
                                                >
                                                    {item[header?.key]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                        </table>
                    </div>

                    {loading && (
                        <div className="mt-[20px] flex justify-center items-center">
                            <LoadingOutlined
                                color="#017C53"
                                size={100}
                                width={"32px"}
                                height={"32px"}
                            />
                        </div>
                    )}

                    {data?.length === 0 && (
                        <div className="w-full flex justify-center items-center  h-full flex-col gap-[15px]">
                            <span className="text-[#667085] text-[14px] font-normal leading-[16.8px]">
                                No Record Found
                            </span>
                        </div>
                    )}
                </div>

                {data?.length > 0 && paginationConfig && (
                    <div className="w-full h-[68px] min-h-[68px] flex items-center justify-between p-[0_16px]">
                        <div>
                            <span className="text-[14px] inter-600 text-[#667185]">
                                Page {paginationConfig.current_page} of{" "}
                                {paginationConfig?.total_page}
                            </span>
                        </div>

                        <div className="flex items-center gap-0">
                            {(pageList.length >= 0 || pageList.length >= 5) &&
                                pageList
                                    .slice(0, 5)
                                    .map((e, index) => (
                                        <PageButton
                                            current_page={paginationConfig.current_page}
                                            key={index}
                                            number={e}
                                        />
                                    ))}

                            {pageList.length > 5 && (
                                <>
                                    {pageList.length < 7 &&
                                        pageList.length > 5 &&
                                        pageList
                                            .slice(5, pageList.length)
                                            .map((e, index) => (
                                                <PageButton
                                                    current_page={paginationConfig.current_page}
                                                    key={index}
                                                    number={e}
                                                />
                                            ))}

                                    {pageList.length >= 7 && (
                                        <>
                                            {pageList.slice(5, pageList.length).length > 2 &&
                                                pageList
                                                    .slice(5, pageList.length)
                                                    .includes(paginationConfig.current_page) && (
                                                    <>
                                                        <div
                                                            className={`h-[24px] w-[24px] text-[#98A2B3] inter-400 text-[14px] flex items-center justify-center ${pageList
                                                                .slice(5, pageList.length)
                                                                .includes(paginationConfig.current_page) &&
                                                                "bg-[#E4FFF0] text-primary rounded-[6px]"
                                                                }`}
                                                        >
                                                            {paginationConfig.current_page}
                                                        </div>
                                                    </>
                                                )}

                                            {pageList.slice(5, pageList.length).length > 2 && (
                                                <>
                                                    <div
                                                        className="h-[24px] w-[24px] text-[#98A2B3] inter-400 text-[14px] flex items-center justify-center">
                                                        ...
                                                    </div>
                                                </>
                                            )}

                                            {pageList
                                                .slice(pageList.length - 2, pageList.length)
                                                .map((e, index) => (
                                                    <PageButton
                                                        current_page={paginationConfig.current_page}
                                                        key={index}
                                                        number={e}
                                                    />
                                                ))}
                                        </>
                                    )}
                                </>
                            )}
                        </div>

                        <div className="flex items-center gap-[16px]">
                            <button
                                onClick={() => pageAction("previous")}
                                className="w-[110px] cursor-pointer justify-center shadow-[0px_4px_8px_-2px_#00000014] h-[36px] bg-[#FFFFFF] rounded-[8px] border-[#D0D5DD] border-[1px] flex items-center gap-[8px] p-[0_12px] text-[#344054] inter-600 text-[14px]"
                            >
                                <PreviousPageIcon /> Previous
                            </button>

                            <button
                                onClick={() => pageAction("next")}
                                className="w-[110px] cursor-pointer shadow-[0px_4px_8px_-2px_#00000014] h-[36px] justify-center bg-[#FFFFFF] rounded-[8px] border-[#D0D5DD] border-[1px] flex items-center gap-[8px] p-[0_12px] text-[#344054] inter-600 text-[14px]"
                            >
                                Next <NextPageIcon />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
