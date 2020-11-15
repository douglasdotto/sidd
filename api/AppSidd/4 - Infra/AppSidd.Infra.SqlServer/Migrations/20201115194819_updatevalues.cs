using Microsoft.EntityFrameworkCore.Migrations;

namespace AppSidd.Infra.SqlServer.Migrations
{
    public partial class updatevalues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Descricao",
                table: "TesteSintoma");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "TesteSintoma",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23D9D409-D7AA-4966-9047-48C04B41F0A1",
                column: "ConcurrencyStamp",
                value: "7894974b-4cfb-48ee-8ec9-ba2785f51604");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "437D49C5-9C56-4E13-9E65-EB1BFF27B0CA",
                column: "ConcurrencyStamp",
                value: "60872bfd-a51c-46f4-a3bd-947628d26384");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53012ACA-C557-4991-8538-F22C0450CC1F",
                column: "ConcurrencyStamp",
                value: "debbae35-e29f-480c-acd2-bebae7ba3116");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84A9CF58-31F8-4C1B-BB08-E93813404C22",
                column: "ConcurrencyStamp",
                value: "3608cf20-4cd6-4cc9-a0f4-c71eb1bdebe9");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "BCC9B822-766F-4F00-8A72-288FB78260AB",
                column: "ConcurrencyStamp",
                value: "5cfbf615-516b-4721-9b44-8f16a7563865");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "F4EA9499-F2FD-464E-9039-A115177C887D",
                column: "ConcurrencyStamp",
                value: "82a1c4be-899f-464b-af5d-874c0280a04e");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "TesteSintoma");

            migrationBuilder.AddColumn<string>(
                name: "Descricao",
                table: "TesteSintoma",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23D9D409-D7AA-4966-9047-48C04B41F0A1",
                column: "ConcurrencyStamp",
                value: "d3b803a4-cf31-464f-b280-cd97c4ade2b3");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "437D49C5-9C56-4E13-9E65-EB1BFF27B0CA",
                column: "ConcurrencyStamp",
                value: "bc1b03b7-1351-4400-83f8-814fb674ecb5");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53012ACA-C557-4991-8538-F22C0450CC1F",
                column: "ConcurrencyStamp",
                value: "e1ea31dc-4d79-4dd3-9d70-3d4e82b32de0");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84A9CF58-31F8-4C1B-BB08-E93813404C22",
                column: "ConcurrencyStamp",
                value: "f5faefbf-8999-480d-8377-3a409fc4fd07");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "BCC9B822-766F-4F00-8A72-288FB78260AB",
                column: "ConcurrencyStamp",
                value: "a1eb1c70-aa88-40b1-bdb1-c523f640c63c");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "F4EA9499-F2FD-464E-9039-A115177C887D",
                column: "ConcurrencyStamp",
                value: "9ea6d3c8-41af-4872-a5e1-a64753d1d23e");
        }
    }
}
