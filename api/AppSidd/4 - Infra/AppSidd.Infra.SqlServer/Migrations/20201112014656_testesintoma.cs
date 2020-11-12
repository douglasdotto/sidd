using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AppSidd.Infra.SqlServer.Migrations
{
    public partial class testesintoma : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TesteSintoma",
                columns: table => new
                {
                    TesteSintomaId = table.Column<Guid>(nullable: false),
                    Descricao = table.Column<string>(nullable: true),
                    SintomasId = table.Column<Guid>(nullable: false),
                    Created = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    Updated = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TesteSintoma", x => x.TesteSintomaId);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23D9D409-D7AA-4966-9047-48C04B41F0A1",
                column: "ConcurrencyStamp",
                value: "8ca310e5-97a5-4271-a3ea-2f28eaf5d631");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "437D49C5-9C56-4E13-9E65-EB1BFF27B0CA",
                column: "ConcurrencyStamp",
                value: "842223f1-9cb7-4de6-b869-2ffe6be2f1e8");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53012ACA-C557-4991-8538-F22C0450CC1F",
                column: "ConcurrencyStamp",
                value: "7805348e-473d-4ce4-9496-5ca7ee39152b");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84A9CF58-31F8-4C1B-BB08-E93813404C22",
                column: "ConcurrencyStamp",
                value: "16b01fcd-1158-4539-bdbd-206e4bcc34b2");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "BCC9B822-766F-4F00-8A72-288FB78260AB",
                column: "ConcurrencyStamp",
                value: "7ba0a54e-5b32-4309-ac64-de8bb874a8ae");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "F4EA9499-F2FD-464E-9039-A115177C887D",
                column: "ConcurrencyStamp",
                value: "3f2d59ff-d9ac-4caf-b45f-b86ddc6b1a29");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TesteSintoma");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23D9D409-D7AA-4966-9047-48C04B41F0A1",
                column: "ConcurrencyStamp",
                value: "87291c9f-8536-41cc-9ed4-1c1693658448");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "437D49C5-9C56-4E13-9E65-EB1BFF27B0CA",
                column: "ConcurrencyStamp",
                value: "478e8dc3-0639-45fc-8ed1-cb581a393c36");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53012ACA-C557-4991-8538-F22C0450CC1F",
                column: "ConcurrencyStamp",
                value: "33062657-da22-4f65-a246-fedddcef177d");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84A9CF58-31F8-4C1B-BB08-E93813404C22",
                column: "ConcurrencyStamp",
                value: "8ba09a33-5a04-47c8-b1d7-1ee4f4bec8e6");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "BCC9B822-766F-4F00-8A72-288FB78260AB",
                column: "ConcurrencyStamp",
                value: "826bcb4b-5d3e-465c-9ac8-10c5dcb3b061");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "F4EA9499-F2FD-464E-9039-A115177C887D",
                column: "ConcurrencyStamp",
                value: "696301b2-ac5a-43db-b535-58eaf238b06d");
        }
    }
}
