-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Access" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Access_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccessUser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessId" TEXT NOT NULL,

    CONSTRAINT "AccessUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idAPI" (
    "id" TEXT NOT NULL,
    "id_api" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "idAPI_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Access_name_key" ON "Access"("name");

-- CreateIndex
CREATE UNIQUE INDEX "idAPI_id_api_key" ON "idAPI"("id_api");

-- AddForeignKey
ALTER TABLE "AccessUser" ADD CONSTRAINT "AccessUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessUser" ADD CONSTRAINT "AccessUser_accessId_fkey" FOREIGN KEY ("accessId") REFERENCES "Access"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
