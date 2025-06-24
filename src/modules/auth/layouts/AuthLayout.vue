<template>
    <div
        class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-200 py-6 sm:py-12"
    >
        <div class="relative py-3 sm:w-96 mx-auto text-center">
            <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                <!-- <div class="h-2 bg-purple-400 rounded-t-md"></div> -->
                <div>
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>
