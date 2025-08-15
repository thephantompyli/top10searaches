'use client'
import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams, useRouter } from 'next/navigation';
  
  

const PaginationBottom = (result: any) => {
      const router = useRouter();

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(result.items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  return (
     <Pagination className="mt-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) goToPage(currentPage - 1);
            }}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {totalPages > 3 && <PaginationEllipsis />}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) goToPage(currentPage + 1);
            }}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationBottom