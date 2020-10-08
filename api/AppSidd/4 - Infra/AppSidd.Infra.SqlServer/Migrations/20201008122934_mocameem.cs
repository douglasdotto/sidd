using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AppSidd.Infra.SqlServer.Migrations
{
    public partial class mocameem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CDR",
                columns: table => new
                {
                    CDRId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    Question1 = table.Column<decimal>(nullable: false),
                    Question2 = table.Column<decimal>(nullable: false),
                    Question3 = table.Column<decimal>(nullable: false),
                    Question4 = table.Column<decimal>(nullable: false),
                    Question5 = table.Column<decimal>(nullable: false),
                    Question6 = table.Column<decimal>(nullable: false),
                    Total = table.Column<decimal>(nullable: false),
                    Created = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    Updated = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CDR", x => x.CDRId);
                });

            migrationBuilder.CreateTable(
                name: "MEEM",
                columns: table => new
                {
                    MEEMId = table.Column<Guid>(nullable: false),
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
                    Total = table.Column<int>(nullable: false),
                    Escolaridade = table.Column<int>(nullable: false),
                    Created = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    Updated = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MEEM", x => x.MEEMId);
                });

            migrationBuilder.CreateTable(
                name: "MoCA",
                columns: table => new
                {
                    MoCAId = table.Column<Guid>(nullable: false),
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
                    Total = table.Column<int>(nullable: false),
                    Created = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    Updated = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MoCA", x => x.MoCAId);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23D9D409-D7AA-4966-9047-48C04B41F0A1",
                column: "ConcurrencyStamp",
                value: "fcbc1498-425b-4b21-ab98-ca4cc0341897");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "437D49C5-9C56-4E13-9E65-EB1BFF27B0CA",
                column: "ConcurrencyStamp",
                value: "0f13df96-389f-4c3d-9919-b289004d5fc1");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53012ACA-C557-4991-8538-F22C0450CC1F",
                column: "ConcurrencyStamp",
                value: "091fe36c-2462-49ba-8a59-077c1b294d5d");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84A9CF58-31F8-4C1B-BB08-E93813404C22",
                column: "ConcurrencyStamp",
                value: "d653f872-fef2-41eb-b760-932023455864");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "BCC9B822-766F-4F00-8A72-288FB78260AB",
                column: "ConcurrencyStamp",
                value: "bdcbf840-90e1-4860-82e2-65bc7b47bce8");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "F4EA9499-F2FD-464E-9039-A115177C887D",
                column: "ConcurrencyStamp",
                value: "59f3c281-1928-42dd-959b-5996f273cf82");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CDR");

            migrationBuilder.DropTable(
                name: "MEEM");

            migrationBuilder.DropTable(
                name: "MoCA");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23D9D409-D7AA-4966-9047-48C04B41F0A1",
                column: "ConcurrencyStamp",
                value: "401073f0-d7cd-43e5-9be0-f65c5ee6fa8c");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "437D49C5-9C56-4E13-9E65-EB1BFF27B0CA",
                column: "ConcurrencyStamp",
                value: "92464ba7-8c2e-4c6a-bbbc-6f6390451374");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53012ACA-C557-4991-8538-F22C0450CC1F",
                column: "ConcurrencyStamp",
                value: "b5bb5982-bc82-4d8a-a23f-7934d855c850");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84A9CF58-31F8-4C1B-BB08-E93813404C22",
                column: "ConcurrencyStamp",
                value: "67ea2760-362b-479a-8a97-6f2371c4ebf1");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "BCC9B822-766F-4F00-8A72-288FB78260AB",
                column: "ConcurrencyStamp",
                value: "bf37c963-8631-4b9a-b151-231119f2a626");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "F4EA9499-F2FD-464E-9039-A115177C887D",
                column: "ConcurrencyStamp",
                value: "7521528a-2dee-43ea-93bf-73024cf4e016");
        }
    }
}
