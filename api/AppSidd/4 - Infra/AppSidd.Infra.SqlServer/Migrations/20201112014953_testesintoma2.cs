using Microsoft.EntityFrameworkCore.Migrations;

namespace AppSidd.Infra.SqlServer.Migrations
{
    public partial class testesintoma2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateIndex(
                name: "IX_TesteSintoma_SintomasId",
                table: "TesteSintoma",
                column: "SintomasId");

            migrationBuilder.AddForeignKey(
                name: "FK_TesteSintoma_Sintomas_SintomasId",
                table: "TesteSintoma",
                column: "SintomasId",
                principalTable: "Sintomas",
                principalColumn: "SintomasId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TesteSintoma_Sintomas_SintomasId",
                table: "TesteSintoma");

            migrationBuilder.DropIndex(
                name: "IX_TesteSintoma_SintomasId",
                table: "TesteSintoma");

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
    }
}
