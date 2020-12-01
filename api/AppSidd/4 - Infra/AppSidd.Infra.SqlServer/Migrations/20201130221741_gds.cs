using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AppSidd.Infra.SqlServer.Migrations
{
    public partial class gds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GDS",
                columns: table => new
                {
                    GDSId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    Question1 = table.Column<int>(nullable: false),
                    Question2 = table.Column<int>(nullable: false),
                    Question3 = table.Column<int>(nullable: false),
                    Question4 = table.Column<int>(nullable: false),
                    Question5 = table.Column<int>(nullable: false),
                    Question6 = table.Column<int>(nullable: false),
                    Question7 = table.Column<int>(nullable: false),
                    Question8 = table.Column<int>(nullable: false),
                    Question9 = table.Column<int>(nullable: false),
                    Question10 = table.Column<int>(nullable: false),
                    Question11 = table.Column<int>(nullable: false),
                    Question12 = table.Column<int>(nullable: false),
                    Question13 = table.Column<int>(nullable: false),
                    Question14 = table.Column<int>(nullable: false),
                    Question15 = table.Column<int>(nullable: false),
                    Total = table.Column<int>(nullable: false),
                    Created = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    Updated = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GDS", x => x.GDSId);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23D9D409-D7AA-4966-9047-48C04B41F0A1",
                column: "ConcurrencyStamp",
                value: "23725b7c-47c9-4f9a-9119-848dced2ff44");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "437D49C5-9C56-4E13-9E65-EB1BFF27B0CA",
                column: "ConcurrencyStamp",
                value: "0c478bc1-067a-49fc-a86e-da4f2205a815");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53012ACA-C557-4991-8538-F22C0450CC1F",
                column: "ConcurrencyStamp",
                value: "1f7b6dca-63ef-4f84-b96b-2597330fecb1");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84A9CF58-31F8-4C1B-BB08-E93813404C22",
                column: "ConcurrencyStamp",
                value: "4f5a2048-b2a1-448f-af15-4d83df131cee");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "BCC9B822-766F-4F00-8A72-288FB78260AB",
                column: "ConcurrencyStamp",
                value: "73535b2b-dba3-4b1e-acaa-e619674b8db3");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "F4EA9499-F2FD-464E-9039-A115177C887D",
                column: "ConcurrencyStamp",
                value: "19fc3dd8-361e-4c0b-bb5c-f24fb6185d16");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GDS");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23D9D409-D7AA-4966-9047-48C04B41F0A1",
                column: "ConcurrencyStamp",
                value: "909e685e-fea8-4242-8b43-3027157c6f83");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "437D49C5-9C56-4E13-9E65-EB1BFF27B0CA",
                column: "ConcurrencyStamp",
                value: "d96a0bc4-ff2a-4b58-862c-d210635d69aa");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53012ACA-C557-4991-8538-F22C0450CC1F",
                column: "ConcurrencyStamp",
                value: "c0ea0121-4f21-451e-b21c-1f8c9aa5d2b7");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84A9CF58-31F8-4C1B-BB08-E93813404C22",
                column: "ConcurrencyStamp",
                value: "a023f69e-483f-474c-b6bd-f7eb8ad0cc01");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "BCC9B822-766F-4F00-8A72-288FB78260AB",
                column: "ConcurrencyStamp",
                value: "bb4cfb2a-012a-47ce-9eee-3725e86f72e4");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "F4EA9499-F2FD-464E-9039-A115177C887D",
                column: "ConcurrencyStamp",
                value: "21a24b35-f232-43e3-85bf-61d65afad08f");
        }
    }
}
